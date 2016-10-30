angular.module('ionicOAuthService.config', [])

.constant('FIREBASE_URL', 'https://ionic-oauth-demo.firebaseio.com')

.constant('SOCIAL', {
	INVALID_PROVIDER: 'INVALID_PROVIDER',
	LINKEDIN: {
		PROVIDER: 'linkedin',
		ID: '77xogkj2ldipkv',
		SECRET: 'SByb7HF2jTkcaffF',
		FB_SECRET: '8sjKdR5q1pxuZpBJHGn2114ttEiOX3ToJoTCrHMk',
		SCOPE: ['r_basicprofile', 'r_emailaddress'], //Put here the others scopes that you want
		STATE: 'ionicOAuthService'
	},
	FACEBOOK: {
		PROVIDER: 'facebook',
		ID: '953464211371939',
		SCOPE: ['public_profile', 'email', 'user_work_history', 'user_friends'] //Put here the others scopes that you want
	},
	GOOGLE: {
		PROVIDER: 'google',
		ID: '268125784328-um1ernorjqq19nt499300t51fa69ooh0.apps.googleusercontent.com',
		SCOPE: ['email'] //Put here the others scopes that you want
	},
	TWITTER: {
		PROVIDER: 'twitter',
		KEY: 'NilNDK0LOvjPLJpt3pLJa8ywU',
		SECRET: 'drboUPKRmaiYFQ76uShvyruykGJSic2Xnrn7vU47Gsy3iClCEu'
	}
});

/*angular.module('ionicOAuthService.config', [])

.constant('FIREBASE_URL', 'https://<your_firebase_domain>.firebaseio.com')

.constant('SOCIAL', {
	INVALID_PROVIDER: 'INVALID_PROVIDER',
	LINKEDIN: {
		PROVIDER: 'linkedin',
		ID: '<LINKEDIN_ID>',
		SECRET: '<LINKEDIN_SECRET>',
		FB_SECRET: '<FIREBASE_SECRET_CUSTOM>',
		SCOPE: ['r_basicprofile', 'r_emailaddress'], //Put here the others scopes that you want
		STATE: 'ionicOAuthService'
	},
	FACEBOOK: {
		PROVIDER: 'facebook',
		ID: '<FACEBOOK_ID>',
		SCOPE: ['public_profile', 'email', 'user_work_history', 'user_friends'] //Put here the others scopes that you want
	},
	GOOGLE: {
		PROVIDER: 'google',
		ID: '<GOOGLE_ID>',
		SCOPE: ['email'] //Put here the others scopes that you want
	},
	TWITTER: {
		PROVIDER: 'twitter',
		KEY: '<TWITTER_KEY>',
		SECRET: '<TWITTER_SECRET>'
	}
});*/