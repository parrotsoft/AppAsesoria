import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Parse } from 'parse';

export const ParseQuery = (obj: any) => {
  return new Parse.Query(obj);
};

export const ParseCurrentUser = () => {
  return Parse.User.current();
};

export const ParseLogOut = () => {
  return Parse.User.logOut();
};

export const ParsePointerTo = (objectId, klass) => {
  return { __type: 'Pointer', className: klass, objectId: objectId };
};


export const Hello = () => {
  return Parse.Cloud.run('create_contact', { nombre: 'Miguel Lopez Ariza'}).then((row) => {
    console.log(row);
  });
};
