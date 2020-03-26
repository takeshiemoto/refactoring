import { NavigationGuard } from 'vue-router';

export const exampleGuard: NavigationGuard = (to, from, next) => {
  console.log('ExampleGuard');
  console.log(to);
  console.log(from);
  next();
};
