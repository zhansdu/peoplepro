<template>
  <div id="wrapper">
    <div class="head-image">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="3.2cm"
        height="2.8cm"
        viewBox="0 0 91.5 79.6"
      ><defs><title>robo</title><path
        class="asvg"
        d="M91.3,10.2,88.1,15a4.2,4.2,0,0,1,1.8,3.5,4,4,0,1,1-8,0A4.2,4.2,0,0,1,83.8,15l-3.2-4.8A10.1,10.1,0,0,0,83,28.1v8.5a2.7,2.7,0,0,1-2.6,2.8H74.5V33.3a21.1,21.1,0,0,0-21-21H50.4a21.1,21.1,0,0,0-21,21v6.1H19.6a8.4,8.4,0,0,0-8.4,8.4V56A9.7,9.7,0,0,0,8.7,73.4l3.1-4.8a4,4,0,1,1,4.4,0l3.1,4.8A9.7,9.7,0,0,0,16.9,56V47.7a2.7,2.7,0,0,1,2.7-2.7h9.8V64.5H48.4v6a11.1,11.1,0,0,1,7,0v-6H74.5V45.3h5.9a8.6,8.6,0,0,0,8.5-8.6V28.1a10.1,10.1,0,0,0,2.5-17.9ZM43.3,57.1H38.9V52.5h4.4Zm7.3,0H46.2V52.5h4.4Zm7.3,0H53.5V52.5h4.4Zm-6-10.3A12.6,12.6,0,1,1,64.5,34.2,12.6,12.6,0,0,1,51.9,46.7ZM65.2,57.1H60.8V52.5h4.4Z"
        transform="translate(-4.3 -10.2)"
      /><path
        class="asvg"
        d="M43.3,81.2a8.6,8.6,0,1,0,8.6-8.6A8.6,8.6,0,0,0,43.3,81.2Zm8.6-2.5a2.5,2.5,0,1,1-2.5,2.5A2.5,2.5,0,0,1,51.9,78.7Z"
        transform="translate(-4.3 -10.2)"
      /><path
        class="asvg"
        d="M51.9,25.6a8.6,8.6,0,1,0,8.6,8.6A8.6,8.6,0,0,0,51.9,25.6Zm0,11.1a2.5,2.5,0,1,1,2.5-2.5A2.5,2.5,0,0,1,51.9,36.7Z"
        transform="translate(-4.3 -10.2)"
      /></defs></svg>
    </div>
    <h1>Our system thinks you might be a robot!</h1>
    <h2>We're really sorry about this, but it's getting harder and harder to tell the difference between humans and bots these days.</h2>
    <div class="acenter captcha-holder">
      <p>Please complete the captcha below to prove you're a human and proceed to the page you're trying to reach.</p>
      <div class="captcha">
        <form
          id="form1"
          method="POST"
          action="343"
          class="column"
        >
          <input
            name="sid"
            type="hidden"
            value="343"
          >
          <input
            name="b"
            type="hidden"
            value="/"
          >
          <div
            id="BD_Captcha_CaptchaDiv"
            class="BDC_CaptchaDiv"
            style="width:280px; height:50px;"
          >
            <div
              id="BD_Captcha_CaptchaImageDiv"
              class="BDC_CaptchaImageDiv"
              style="width:250px !important; height:50px !important;"
            >
              <img
                id="BD_Captcha_CaptchaImage"
                class="BDC_CaptchaImage"
                src="/.well-known/captcha/343/botdetect/?get=image&amp;c=bd_captcha&amp;t=99089e000aa932324973271e0de77bb4&amp;sid=343"
                alt="Retype the CAPTCHA code from the image"
              >
            </div><div
              id="BD_Captcha_CaptchaIconsDiv"
              class="BDC_CaptchaIconsDiv"
              style="width: 24px !important;"
            >
              <a
                id="BD_Captcha_ReloadLink"
                class="BDC_ReloadLink"
                href="#"
                onclick="BD_Captcha.ReloadImage(); this.blur(); return false;"
                title="Change the CAPTCHA code"
                style="display: inline-block !important;"
              ><img
                id="BD_Captcha_ReloadIcon"
                class="BDC_ReloadIcon"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAQAAABuvaSwAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpkNjE0ODcxNS0wNTM3LTQ4ODQtYTBkOS1lZTdmNzFjMDRlNjMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTI5MjBFODQxRTI4MTFFNzk2RUVCRDg0NkI5QzlCNkEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTI5MjBFODMxRTI4MTFFNzk2RUVCRDg0NkI5QzlCNkEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDplZjQ1MWViOC03ZWRlLTQxYmYtODJmOS00OTMwNjVhNmM3YWUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ZDYxNDg3MTUtMDUzNy00ODg0LWEwZDktZWU3ZjcxYzA0ZTYzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+t8S3YgAAALhJREFUKM/F0lENwyAUhWEs1AIWsPBbqAUsYAEL10It1MIsYAEL7IFbIKEsy7JsuUkfyAc9PdQU8/6YX2EgIAgRdGW7xVgOyjAnlkDufKRJUSKRKRR92hnXUwVXX05UOmOodAgVWpwJC2VMp5sX2OFrgMZ3PB5/tfJpz9quIONJBIQw46u23DGWTOFYY9/opmXy6uSIxxN0Jd5lTmSkXcM1x+oDKQbH2TY8eqRldWzA3i/iLz//F/ETxFPbiDh40wkAAAAASUVORK5CYII="
                alt="Change the CAPTCHA code"
              ></a><a
                id="BD_Captcha_SoundLink"
                rel="nofollow"
                class="BDC_SoundLink"
                href="/.well-known/captcha/343/botdetect/?get=sound&amp;c=bd_captcha&amp;t=99089e000aa932324973271e0de77bb4&amp;sid=343"
                onclick="BD_Captcha.PlaySound(); this.blur(); return false;"
                title="Speak the CAPTCHA code"
                target="_blank"
              ><img
                id="BD_Captcha_SoundIcon"
                class="BDC_SoundIcon"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAQAAABuvaSwAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpkNjE0ODcxNS0wNTM3LTQ4ODQtYTBkOS1lZTdmNzFjMDRlNjMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTI5MjBFODgxRTI4MTFFNzk2RUVCRDg0NkI5QzlCNkEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTI5MjBFODcxRTI4MTFFNzk2RUVCRDg0NkI5QzlCNkEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpmYjExNzRiNi0xZTUwLTQ2YTMtYjM3MS1hMGEzNzY0MzNlY2YiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ZDYxNDg3MTUtMDUzNy00ODg0LWEwZDktZWU3ZjcxYzA0ZTYzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+rsIN7wAAALtJREFUKM/N0jGVwzAQBcClYApLwRSGgimYgigcBVEwhaNgCqIgCk7hO784L05SRr9RMdpC+2OLzxNfhZ8fw//tEhtkRIRZV19iqe1EmnXLJZaaTY0w6Yrcpz9gKY2abccRiq6YdXnCJttdqtRQdKkpZzyfcYSqS91sUd9hNqmZ1TdYan6NNqyPOFXVcje5GCxWo256/nXlwKNVN6rW66WUP5x+pKLzat1FiThme9mN49Go7i2Jryz/Z7kBC+OAbI4NxvUAAAAASUVORK5CYII="
                alt="Speak the CAPTCHA code"
              ></a><div
                id="BD_Captcha_AudioPlaceholder"
                class="BDC_Placeholder"
              >
&nbsp;
              </div>
            </div>

            <input
              id="BDC_UserSpecifiedCaptchaId"
              type="hidden"
              name="BDC_UserSpecifiedCaptchaId"
              value="BD_Captcha"
            >
            <input
              id="BDC_VCID_BD_Captcha"
              type="hidden"
              name="BDC_VCID_BD_Captcha"
              value="99089e000aa932324973271e0de77bb4"
            >
            <input
              id="BDC_BackWorkaround_BD_Captcha"
              type="hidden"
              name="BDC_BackWorkaround_BD_Captcha"
              value="1"
            >
          </div>
          <input
            id="BDCC"
            name="BDCC"
            type="text"
            class="captcha_input"
            autocomplete="off"
            style="text-transform: uppercase;"
          >
          <input
            id="ValidateCaptchaButton"
            type="submit"
            name="ValidateCaptchaButton"
            value="CONTINUE"
            class="captcha_submit"
          ><br>
        </form>
      </div>
    </div>
  </div>
</template>
