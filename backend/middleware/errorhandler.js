function errorHandler(err, req, res, next) {
  console.error(err);
  if (res.headersSent) return next(err);
  const status = err.status || 500;
  res.status(status).json({ error: { code: err.code || 'server_error', message: err.message || 'Internal server error' }});
}

module.exports = { errorHandler };
