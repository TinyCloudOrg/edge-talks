# Edge Lanna Document Generation API Endpoints

This document outlines the available endpoints for the Edge Lanna Document Generation API.

## Base URL

The base URL for all endpoints is: `http://edge-api.tinycloud.xyz`

## Endpoints

### 1. Create Document

Generates a new document based on the provided title and ID.

- **URL:** `/create`
- **Method:** POST
- **Authentication:** 
    - `Authorization`: Your API Key (Ask Sam for a key)
- **Body:**
  - `title`: string
  - `id`: string

**Example Request:**

```
POST /create HTTP/1.1
Authorization: YOUR_API_KEY
Content-Type: application/json; charset=utf-8
Host: edge-api.tinycloud.xyz
Connection: close
User-Agent: RapidAPI/4.2.6 (Macintosh; OS X/15.0.0) GCDHTTPRequest
Content-Length: 51

{"title":"This is a test document!","id":"abcd123"}
```

**Example Response:**

```
{
  "success": true,
  "data": "https://docs.google.com/document/d/1234567890abcdef/edit"
}
```
