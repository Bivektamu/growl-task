<h1 align="center">Growl Task</h1>

This package consists of growl notification feature which is auto hidden in every 3 seconds once it is updated 

**Note**: This project is created solely for the purpose of coding interview. PLease do not use this in your live projects.

<h2 align="center">Install</h2>

> growl-task v1.0

```bash
npm install growl-task
```

<h2 align="center">Usage</h2>


Import the Growl component in your desired react component using follwoing code:


```javascript

import {Growl} from 'growl-task'

```

Then, simply use the component with initial state and message to notify.


```javascript

<Growl active={true} message='Hello World'  />


```

### Options


You can pass options to the Growl component by passing values to below props:

`active {type:bool}`: sets state of Growl component to show or hide. 
`message {type:string}`: sets message of Growl component to display. 

Thank you for your time to reviewer of this code.