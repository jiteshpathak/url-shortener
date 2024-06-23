const shortid = require("shortid");
const URL = require("../models/url");

async function generateNewShortUrl(req, res) {
    const body = req.body;

    if (!body.url) {
        return res.status(400).json({
            message: "Url is required"
        });
    }

    const shortID = shortid.generate();

    try {
        await URL.create({
            shortId: shortID,
            redirectUrl: body.url,  // Ensure the key matches the request body key
        });
        return res.json({ id: shortID });
    } catch (error) {
        console.error('Error creating URL:', error);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
}

module.exports = { generateNewShortUrl };
