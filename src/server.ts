import app from './config/express';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📍 API available at: http://localhost:${PORT}/api`);
    console.log(`📍 Companies endpoint: http://localhost:${PORT}/api/companies`);
});