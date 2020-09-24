import forge from 'node-forge'
// 创建密钥对
function createKeypair () {
  const keys = forge.pki.rsa.generateKeyPair(1024)
  return {
    pub: keys.publicKey,
    pri: keys.privateKey
  }
}
/**
 * 生成证书
 * @param {String} privateKeyData 私钥
 * @param {String} publickeyData 公钥
 */
function createCert (privateKeyData, publickeyData) {
  const cert = forge.pki.createCertificate()
  cert.privateKey = privateKeyData
  cert.publicKey = publickeyData
  /** 设置有效期 */
  cert.validity.notBefore = new Date()
  cert.validity.notAfter = new Date()
  cert.validity.notAfter.setFullYear(cert.validity.notBefore.getFullYear() + 1)

  const attrs = [{
    name: 'organizationName',
    value: 'OU=G4B'
  }]
  cert.setSubject(attrs)
  cert.setIssuer(attrs)
  cert.setExtensions([{
    name: 'basicConstraints',
    cA: true
  }, {
    name: 'keyUsage',
    keyCertSign: true,
    digitalSignature: true,
    nonRepudiation: true,
    keyEncipherment: true,
    dataEncipherment: true
  }, {
    name: 'extKeyUsage',
    serverAuth: true,
    clientAuth: true,
    codeSigning: true,
    emailProtection: true,
    timeStamping: true
  }, {
    name: 'nsCertType',
    client: true,
    server: true,
    email: true,
    objsign: true,
    sslCA: true,
    emailCA: true,
    objCA: true
  }, {
    name: 'subjectAltName',
    altNames: [{
      type: 6, // URI
      value: 'http://example.org/webid#me'
    }, {
      type: 7, // IP
      ip: '127.0.0.1'
    }]
  }, {
    name: 'subjectKeyIdentifier'
  }])
  cert.sign(privateKeyData)

  return cert
}

// 获取证书需要
// 解密
function envelopeDecrypt (cert, pri, data) {
  data = '-----BEGIN PKCS7-----' + data + '-----END PKCS7-----'
  const serP7 = forge.pkcs7.messageFromPem(data)
  const recipient = serP7.findRecipient(cert)
  serP7.decrypt(recipient, pri)
  return serP7.content
}

// 加密
function envelopeEncrypt (data) {
  var certData = forge.pki.certificateFromPem(PUBLIC_KEY)
  var p7 = forge.pkcs7.createEnvelopedData()
  p7.addRecipient(certData)
  p7.content = forge.util.createBuffer(data, 'utf8')
  p7.encrypt(null, forge.pki.oids['des-EDE3-CBC'])

  var p7Pem = forge.pkcs7.messageToPem(p7)
  return p7Pem
}

// 签名需要
function md5 (srcStr) {
  const md = forge.md.md5.create()
  md.update(srcStr)
  return md.digest().toHex()
}

/**
 * 加密
 */
const keyPair = createKeypair()
const cert = createCert(keyPair.pri, keyPair.pub)
const encCertB64 = forge.pki.certificateToPem(cert)
// 组装需要加密的参数
const data = JSON.stringify({encCertB64})

const envelopeData = envelopeEncrypt(data)


/**
 * 解密
 * 
 */

const decryptData = envelopeDecrypt(cert, keyPair.pri, envelope)
const d = JSON.parse(decodeURIComponent(escape(decryptData.data)))