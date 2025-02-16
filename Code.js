function checkPrivacyPolicy() {
  var url = "URL_PAGE_PRIVATE_DOHOKIN"; // 원하는 URL로 변경하세요.
  var response = UrlFetchApp.fetch(url);
  var htmlSource = response.getContentText();
  
  // "Privacy Policy" 문자열이 있는지 검사
  if (htmlSource.indexOf("Privacy Policy") !== -1) {
    Logger.log("Privacy Policy 문구가 존재합니다.");
  } else {
    sendToDiscord({content_text: "Privacy Policy 문구를 찾을 수 없습니다."})
  }
}
