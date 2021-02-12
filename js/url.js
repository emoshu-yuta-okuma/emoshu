$(window).bind('load', function () { 

  if (document.URL.match('/#recruitment')) {
    let url = location.hash;
    
    switch (url) {
      case '#recruitment-ios':
        $('#tap-1').prop('checked', true);
      break;
      case '#recruitment-android':
        $('#tap-2').prop('checked', true);
      break;
      case '#recruitment-serverside':
        $('#tap-3').prop('checked', true);
      break;
      case '#recruitment-director':
        $('#tap-4').prop('checked', true);
      break;
      case '#recruitment-internship':
        $('#tap-5').prop('checked', true);
      break;
    }
  }
});