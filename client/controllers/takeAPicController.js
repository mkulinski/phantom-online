angular
  .module('My.TakeApicController', ['ngRoute'])
  .controller('TakeApicController', ['$scope', '$http', '$location', '$injector', TakeApicController]);

function TakeApicController($scope, $http, $location, $injector) {
  const previewImage = document.getElementById('previewImage');
  const video = document.querySelector('#videoElement');
  const captureButton = document.getElementById('capture');

  const canvas = document.createElement('canvas');
  canvas.width = 100; // set to current video width
  canvas.height = 100; // set to current video height
  const ctx = canvas.getContext('2d');

  navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;

  if (navigator.getUserMedia) {
    navigator.getUserMedia({ video: true }, handleVideo, videoError);
  }

  function handleVideo(stream) {
    video.src = window.URL.createObjectURL(stream);
  }

  function videoError(e) {
      // do something
  }

  $scope.captureImage = function () {
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    // convert to desired file format
    const dataURL = canvas.toDataURL('image/jpeg'); // can also use 'image/png'
    const baseURL = canvas.toDataURL();
    previewImage.src = dataURL;

    $.ajax({
      type: 'POST',
      url: '/image',
      data: {
        imgBase64: baseURL,
        username: UserFactory.username,
      },
    }).done(function (o) {
      console.log('saved');
      // If you want the file to be visible in the browser
      // - please modify the callback in javascript. All you
      // need is to return the url to the file, you just saved
      // and than put the image in your browser.
    });
  };
}
