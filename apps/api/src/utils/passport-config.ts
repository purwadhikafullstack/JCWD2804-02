import passport from 'passport';
import OAuth2Strategy from 'passport-oauth2';

// Konfigurasi OAuth
passport.use(
  new OAuth2Strategy(
    {
      authorizationURL: 'http://localhost:3000/login',
      tokenURL: 'https://your-auth-server.com/oauth/token',
      clientID:
        '92336962995-lk9iq9ih75sep9mu59rhmpg3mnmtp5k9.apps.googleusercontent.com',
      clientSecret: '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',
      callbackURL: 'http://localhost:3000/',
    },
    (accessToken: string, refreshToken: string, profile: any, done: any) => {
      // Simpan informasi pengguna ke sesi atau database
      return done(null, { accessToken, profile });
    },
  ),
);

// Serialize dan deserialize pengguna untuk menyimpan informasi ke sesi
passport.serializeUser((user: any, done: any) => {
  done(null, user);
});

passport.deserializeUser((obj: any, done: any) => {
  done(null, obj);
});
