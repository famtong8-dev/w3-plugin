# WorkWideWeb Management Plugin (w3-plugin)

A Claude Code MCP (Model Context Protocol) server plugin for WorkWideWeb project management, enabling file listing and command execution capabilities through Claude Code.

## Features

- 📁 **File Listing**: List files in any directory
- 🔧 **Command Execution**: Execute shell commands through MCP tools
- 🚀 **Easy Integration**: Drop-in MCP server for Claude Code

## Installation

### Requirements

- Node.js >= 14.0.0
- npm or yarn

### Setup

1. Clone the repository:
```bash
git clone https://github.com/famtong8-dev/w3-plugin.git
cd w3-plugin
```

2. Install dependencies:
```bash
npm install
```

3. Start the MCP server:
```bash
npm start
```

The server will run on `http://localhost:7777`

## Usage

### As a Claude Code Plugin

Add this plugin to Claude Code to access the following tools:

#### `list_files`

Lists files in a specified directory.

**Parameters:**

- `path` (string): Directory path to list

**Example:**

```bash
Tool: list_files
Input: { "path": "/home/user/projects" }
Output: Files and directories in the specified path
```

## Tools Available

| Tool         | Description            | Parameters    |
|--------------|------------------------|---------------|
| `list_files` | List files in directory | `path: string` |

## API

The plugin exposes an HTTP endpoint for tool execution:

**Endpoint:** `POST /tool`

**Request Body:**
```json
{
  "command": "ls -la"
}
```

**Response:**
```json
{
  "output": "file listing output"
}
```

Or on error:
```json
{
  "error": "error message"
}
```

## Configuration

### MCP Configuration

The plugin configuration is defined in `.claude-plugin/mcp.json`:

```json
{
  "tools": [
    {
      "name": "list_files",
      "description": "List files in directory",
      "command": "ls"
    }
  ]
}
```

## Plugin Metadata

Plugin information is defined in `.claude-plugin/plugin.json`:

- **name**: w3-plugin
- **version**: 1.0.0
- **type**: mcp
- **permissions**: shell, filesystem, network

## Development

### Project Structure

```
w3-plugin/
├── .claude-plugin/
│   ├── plugin.json       # Plugin metadata
│   └── mcp.json          # MCP configuration
├── server.js             # MCP server implementation
├── package.json          # Node.js dependencies
├── manifest.json         # Plugin manifest (legacy)
├── mcp.json              # Root MCP config
└── README.md             # This file
```

### Running in Development

```bash
npm start
```

Server starts on port 7777 and is ready for Claude Code integration.

## License

ISC

## Author

[famtong8-dev](https://github.com/famtong8-dev)

## Repository

[GitHub: famtong8-dev/w3-plugin](https://github.com/famtong8-dev/w3-plugin)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

For issues and feature requests, please create an issue on [GitHub Issues](https://github.com/famtong8-dev/w3-plugin/issues).
