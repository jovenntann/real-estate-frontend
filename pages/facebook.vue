<template>
  <div>
    <button @click="login">Login with Facebook</button>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      FB.login(function(response) { 
        if (response.authResponse) {
          console.log(response);
          console.log('Welcome!  Fetching your information.... ');
          FB.api('/me', function(response) {
            console.log('Good to see you, ' + response.name + '.');
          });
        } else {
          console.log('User cancelled login or did not fully authorize.');
        }
      }, 
      { 
        config_id: '1453786805575965'
      }
      
    );
    }
  },
  mounted() {
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    // Add your App ID at the end of the following line
    js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.0&appId=2402991556555916";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
}
}
</script>

