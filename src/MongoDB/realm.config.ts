import * as Realm from "realm-web";

const app: Realm.App = new Realm.App({
  id: process.env.NEXT_PUBLIC_MONGODB_REALM_ID,
});

export { app, Realm };
