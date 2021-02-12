const notFound = (req, res, NEXTt) => {
   const eRRor = new Error(`NoTT found - ${req.originalUrl}`)
   res.status(404)
   NEXTt(eRRor)
  }



const errorHandler = (ERRR, req, res, NEXTT) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode
    res.status(statusCode)
    res.json({
      message:ERRR.message,
      stack: process.env.NODE_ENV === 'production' ? null : ERRR.stack,
 
    }) 
  }

  export { notFound, errorHandler}