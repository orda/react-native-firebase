/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * Copyright (c) 2016-present Invertase Limited & Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this library except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

import { firebase } from '..';

/*
 * Returns the Auth instance associated with the provided FirebaseApp.
 *
 * If no instance exists, initializes an Auth instance with platform-specific default dependencies.
 */
export function getAuth(app) {
  if (app) {
    return {
      app: firebase.app(app.name),
      config: firebase.app(app.name).auth().config,
      currentUser: firebase.app(app.name).auth().currentUser,
      languageCode: firebase.app(app.name).auth().languageCode,
      settings: firebase.app(app.name).auth().settings,
      tenantId: firebase.app(app.name).auth().tenantId,
    };
  }
  return {
    app: firebase.app(),
    config: firebase.app().auth().config,
    currentUser: firebase.app().auth().currentUser,
    languageCode: firebase.app().auth().languageCode,
    settings: firebase.app().auth().settings,
    tenantId: firebase.app().auth().tenantId,
  };
}

function _getUnderlyingAuth(auth) {
  return auth.app.auth();
}

/*
 * This function allows more control over the Auth instance than getAuth().
 *
 * getAuth uses platform-specific defaults to supply the Dependencies.
 * In general, getAuth is the easiest way to initialize Auth and works for most use cases.
 * Use initializeAuth if you need control over which persistence layer is used, or to minimize bundle size
 * if you're not using either signInWithPopup or signInWithRedirect.
 */
export function initializeAuth(app, deps) {
  return getAuth(app);
}

/*
 * Applies a verification code sent to the user by email or other out-of-band mechanism.
 *
 * Returns a promise that resolves when the code is applied successfully.
 */
export async function applyActionCode(auth, oobCode) {
  const _auth = _getUnderlyingAuth(auth);
  return _auth.applyActionCode(oobCode);
}

/*
 * Adds a blocking callback that runs before an auth state change sets a new user.
 */
export function beforeAuthStateChanged(auth, callback, onAbort) {
  throw new Error('beforeAuthStateChanged is not implemented on React Native');
}

/*
 * Checks a verification code sent to the user by email or other out-of-band mechanism.
 */
export async function checkActionCode(auth, oobCode) {
  const _auth = _getUnderlyingAuth(auth);
  return _auth.checkActionCode(oobCode);
}

/*
 * Completes the password reset process, given a confirmation code and new password.
 */
export async function confirmPasswordReset(auth, oobCode, newPassword) {
  const _auth = _getUnderlyingAuth(auth);
  return _auth.confirmPasswordReset(oobCode, newPassword);
}

/*
 * Changes the Auth instance to communicate with the Firebase Auth Emulator, instead of production Firebase Auth services.
 *
 * This must be called synchronously immediately following the first call to initializeAuth(). Do not use with production credentials as emulator traffic is not encrypted.
 */
export function connectAuthEmulator(auth, url, options) {
  const _auth = _getUnderlyingAuth(auth);
  _auth.useEmulator(url, options);
}

/*
 * Creates a new user account associated with the specified email address and password.
 */
export async function createUserWithEmailAndPassword(auth, email, password) {
  const _auth = _getUnderlyingAuth(auth);
  return _auth.createUserWithEmailAndPassword(email, password);
}

/*
 * Gets the list of possible sign in methods for the given email address.
 */
export async function fetchSignInMethodsForEmail(auth, email) {
  const _auth = _getUnderlyingAuth(auth);
  return _auth.fetchSignInMethodsForEmail(email);
}

/*
 * Provides a MultiFactorResolver suitable for completion of a multi-factor flow.
 */
export function getMultiFactorResolver(auth, error) {
  const _auth = _getUnderlyingAuth(auth);
  return _auth.getMultiFactorResolver(error);
}

/*
 * Returns a UserCredential from the redirect-based sign-in flow.
 */
export async function getRedirectResult(auth, resolver) {
  throw new Error('getRedirectResult is not implemented on React Native');
}

/*
 * Checks if an incoming link is a sign-in with email link suitable for signInWithEmailLink().
 */
export function isSignInWithEmailLink(auth, emailLink) {
  const _auth = _getUnderlyingAuth(auth);
  return _auth.isSignInWithEmailLink(emailLink);
}

/*
 * Adds an observer for changes to the user's sign-in state.
 */
export function onAuthStateChanged(auth, nextOrObserver) {
  const _auth = _getUnderlyingAuth(auth);
  return _auth.onAuthStateChanged(nextOrObserver);
}

/*
 * Adds an observer for changes to the signed-in user's ID token.
 */
export function onIdTokenChanged(auth, nextOrObserver) {
  const _auth = _getUnderlyingAuth(auth);
  return _auth.onIdTokenChanged(nextOrObserver);
}

/*
 * Sends a password reset email to the given email address.
 */
export async function sendPasswordResetEmail(auth, email, actionCodeSettings) {
  const _auth = _getUnderlyingAuth(auth);
  return _auth.sendPasswordResetEmail(email, actionCodeSettings);
}

/*
 * Sends a sign-in email link to the user with the specified email.
 */
export async function sendSignInLinkToEmail(auth, email, actionCodeSettings) {
  const _auth = _getUnderlyingAuth(auth);
  return _auth.sendSignInLinkToEmail(email, actionCodeSettings);
}

/*
 * Changes the type of persistence on the Auth instance for the currently saved Auth session and applies this type of persistence for future sign-in requests, including sign-in with redirect requests.
 */
export async function setPersistence(auth, persistence) {
  throw new Error('setPersistence is not implemented on React Native');
}

/*
 * Asynchronously signs in as an anonymous user.
 */
export async function signInAnonymously(auth) {
  const _auth = _getUnderlyingAuth(auth);
  return _auth.signInAnonymously();
}

/*
 * Asynchronously signs in with the given credentials.
 */
export async function signInWithCredential(auth, credential) {
  const _auth = _getUnderlyingAuth(auth);
  return _auth.signInWithCredential(credential);
}

/*
 * Asynchronously signs in using a custom token.
 */
export async function signInWithCustomToken(auth, customToken) {
  const _auth = _getUnderlyingAuth(auth);
  return _auth.signInWithCustomToken(customToken);
}

/*
 * Asynchronously signs in using an email and password.
 */
export async function signInWithEmailAndPassword(auth, email, password) {
  const _auth = _getUnderlyingAuth(auth);
  return _auth.signInWithEmailAndPassword(email, password);
}

/*
 * Asynchronously signs in using an email and sign-in email link.
 */
export async function signInWithEmailLink(auth, email, emailLink) {
  const _auth = _getUnderlyingAuth(auth);
  return _auth.signInWithEmailLink(email, emailLink);
}

/*
Asynchronously signs in using a phone number.
*/
export async function signInWithPhoneNumber(auth, phoneNumber, appVerifier) {
  const _auth = _getUnderlyingAuth(auth);
  return _auth.signInWithPhoneNumber(phoneNumber);
}

/*
Authenticates a Firebase client using a popup-based OAuth authentication flow.
*/
export async function signInWithPopup(auth, provider, resolver) {
  throw new Error('signInWithPopup is not implemented on React Native');
}

/*
Authenticates a Firebase client using a full-page redirect flow.
*/
export async function signInWithRedirect(auth, provider, resolver) {
  throw new Error('signInWithRedirect is not implemented on React Native');
}

/*
Signs out the current user.
*/
export async function signOut(auth) {
  const _auth = _getUnderlyingAuth(auth);
  return _auth.signOut();
}

/*
Asynchronously sets the provided user as Auth.currentUser on the Auth instance.
*/
export async function updateCurrentUser(auth, user) {
  throw new Error('updateCurrentUser is not implemented on React Native');
}

/*
Sets the current language to the default device/browser preference.
*/
export function useDeviceLanguage(auth) {
  throw new Error('useDeviceLanguage is not implemented on React Native');
}

/*
Verifies the password reset code sent to the user by email or other out-of-band mechanism.
*/
export async function verifyPasswordResetCode(auth, code) {
  const _auth = _getUnderlyingAuth(auth);
  return _auth.verifyPasswordResetCode(code);
}

/*
 * Parses the email action link string and returns an ActionCodeURL if the link is valid, otherwise returns null.
 */
export function parseActionCodeURL(link) {
  throw new Error('parseActionCodeURL is not implemented on React Native');
}

/*
 * Deletes and signs out the user.
 */
export async function deleteUser(user) {
  return user.delete();
}

/*
 * Returns a JSON Web Token (JWT) used to identify the user to a Firebase service.
 */
export async function getIdToken(user, forceRefresh) {
  return user.getIdToken(forceRefresh);
}

/*
 * Returns a deserialized JSON Web Token (JWT) used to identify the user to a Firebase service.
 */
export async function getIdTokenResult(user, forceRefresh) {
  return user.getIdTokenResult(forceRefresh);
}

/*
 * Links the user account with the given credentials.
 */
export async function linkWithCredential(user, credential) {
  return user.linkWithCredential(credential);
}

/*
 * Links the user account with the given phone number.
 */
export async function linkWithPhoneNumber(user, phoneNumber, appVerifier) {
  throw new Error('linkWithPhoneNumber is not implemented on React Native');
}

/*
 * Links the authenticated provider to the user account using a pop-up based OAuth flow.
 */
export async function linkWithPopup(user, provider, resolver) {
  throw new Error('linkWithPopup is not implemented on React Native');
}

/*
 * Links the OAuthProvider to the user account using a full-page redirect flow.
 */
export async function linkWithRedirect(user, provider, resolver) {
  throw new Error('linkWithRedirect is not implemented on React Native');
}

/*
 * The MultiFactorUser corresponding to the user.
 */
export function multiFactor(user) {
  return user.multiFactor;
}

/*
 * Re-authenticates a user using a fresh credential.
 */
export async function reauthenticateWithCredential(user, credential) {
  return user.reauthenticateWithCredential(credential);
}

/*
 * Re-authenticates a user using a fresh phone credential.
 */
export async function reauthenticateWithPhoneNumber(user, phoneNumber, appVerifier) {
  throw new Error('reauthenticateWithPhoneNumber is not implemented on React Native');
}

/*
 * Reauthenticates the current user with the specified OAuthProvider using a pop-up based OAuth flow.
 */
export async function reauthenticateWithPopup(user, provider, resolver) {
  throw new Error('reauthenticateWithPopup is not implemented on React Native');
}

/*
 * Reauthenticates the current user with the specified OAuthProvider using a full-page redirect flow.
 */
export async function reauthenticateWithRedirect(user, provider, resolver) {
  throw new Error('reauthenticateWithRedirect is not implemented on React Native');
}

/*
 * Reloads user account data, if signed in.
 */
export async function reload(user) {
  return user.reload();
}

/*
 * Sends a verification email to a user.
 */
export async function sendEmailVerification(user, actionCodeSettings) {
  return user.sendEmailVerification(actionCodeSettings);
}

/*
 * Unlinks a provider from a user account.
 */
export async function unlink(user, providerId) {
  return user.unlink(providerId);
}

/*
 * Updates the user's email address.
 */
export async function updateEmail(user, newEmail) {
  return user.updateEmail(newEmail);
}

/*
 * Updates the user's password.
 */
export async function updatePassword(user, newPassword) {
  return user.updatePassword(newPassword);
}

/*
 * Updates the user's phone number.
 */
export async function updatePhoneNumber(user, credential) {
  return user.updatePhoneNumber(credential);
}

/*
 * Updates a user's profile data.
 */
export async function updateProfile(user, { displayName, photoURL: photoUrl }) {
  return user.updateProfile({ displayName, photoURL: photoUrl });
}

/*
 * Sends a verification email to a new email address.
 */
export async function verifyBeforeUpdateEmail(user, newEmail, actionCodeSettings) {
  return user.verifyBeforeUpdateEmail(newEmail, actionCodeSettings);
}

/*
 * Extracts provider specific AdditionalUserInfo for the given credential.
 */
export function getAdditionalUserInfo(userCredential) {
  return userCredential.additionalUserInfo;
}
