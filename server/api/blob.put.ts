export default eventHandler(async (event) => {
  console.log('hello')
  return hubBlob().handleUpload(event,{
    formKey: 'files',
    multiple: false,
    ensure: {
      types: ['pdf','application/msword','text/plain','image/jpeg','image/png' ],
      maxSize: "2MB"
    },
    put: {
      addRandomSuffix: true
    }
  })
})
