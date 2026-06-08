const marked = require('marked');
const sanitizeHtmlLibrary = require('sanitize-html');
const TurndownService = require('turndown');

function sanitizeMarkdownContent(markdownContent){
    const turndownService = new TurndownService();

    const convertedHtml = marked.parse(markdownContent);
    console.log(convertedHtml);

    const sanitizedHtml = sanitizeHtmlLibrary(convertedHtml, {
        allowedTags: sanitizeHtmlLibrary.defaults.allowedTags.concat(['img'])
    });

    const sanitizedMarkdown = turndownService.turndown(sanitizedHtml);
    console.log(sanitizedMarkdown);
    return sanitizedMarkdown;
}

module.exports = sanitizeMarkdownContent;