function giveFeedback() {
  $('.mainStory, .showFeedbackDisclaimer').hide();
  $('.feedbackDisclaimerTxt, .feedbackInput, .giveFeedbackSection, .submitFeedback').show();

  
}

function sumbitFeedback() {
  $('.showFeedbackDisclaimer').show();
  $('.feedbackDisclaimerTxt, .feedbackInput,  .submitFeedback').hide();
}

function returnStory(){
  $('.mainStory').show();
  $('.giveFeedbackSection').hide();
}