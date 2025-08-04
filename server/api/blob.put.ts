export default eventHandler(async (event) => {
  return hubBlob().handleUpload(event,{
    formKey: 'files',
    multiple: false,
    ensure: {
      maxSize: "2MB"
    },
    put: {
      addRandomSuffix: true
    }
  })
})
