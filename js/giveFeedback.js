function giveFeedback() {
  $('.feedbackDisclaimerTxt').html("If you see a bug or spelling/grammar issue please report it below and I'll get it sorted.<br> Thanks!");
  $('.feedbackInput textarea').val('');
  $('.feedbackInput input').val('');
  $('.mainStory, .showFeedbackDisclaimer').hide();
  $('.feedbackDisclaimerTxt, .feedbackInput, .giveFeedbackSection, .submitFeedback').show();
}

function sumbitFeedback() {
  var feedback = $('.feedbackInput textarea').val();
  var email = $('.feedbackInput input').val();
  $('.showFeedbackDisclaimer').show();
  $('.feedbackDisclaimerTxt, .feedbackInput,  .submitFeedback').hide();
  feedbackWrite(feedback, email, storyId);
}

function returnStory(){
  $('.mainStory').show();
  $('.giveFeedbackSection').hide();
}