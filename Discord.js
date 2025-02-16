function sendToDiscord({content_text = "some text", discordUrl = discord_hook_url}) {
  var payload = {
    content: content_text
  };
  var options = {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify(payload)
  };
  UrlFetchApp.fetch(discordUrl, options);
}