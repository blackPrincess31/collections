import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const SignupButton = () => {

    const { loginWithRedirect } = useAuth0();
  
      return (
        <button
          className="btn btn-primary btn-block"
          onClick={() =>
            loginWithRedirect({
              screen_hint: 'signup',
            })
          }
        >
          Sign Up
        </button>
      );
  };

  export {SignupButton};

// function (user, context, callback) {
//     user.user_metadata = user.user_metadata || {};
//     user.user_metadata.logins = context.stats.loginsCount;
//     context.idToken['https://example.com/logins'] = user.user_metadata.logins;
  
//     auth0.users.updateUserMetadata(user.user_id, user.user_metadata)
//       .then(function(){
//           callback(null, user, context);
//       })
//       .catch(function(err){
//           callback(err);
//       });
//   }