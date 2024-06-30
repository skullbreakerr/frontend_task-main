## Setup/Installations
* Install dependencies 
  * for server : ``npm install``
 * Run server (in main directory of project) ``npm start``

## APIS
**[GET]**   http://example.com/users

**[POST]**   http://example.com/user
```
{
    name:<string>,
    email:<string>
}
```
**[PUT]**   http://example.com/user/:id
```
{
    name:<string>,
    email:<string>
}
```

**[DELETE]**   http://example.com/user/:id

## LEVELS

### Level 1 
- Add CSS:
	- [✔] Convert the displayed data into an HTML table.
	- [✔] Ensure there is appropriate spacing and padding between table elements for better readability [refer screenshot].
- Fix Existing Issues:
	- [✔] The "Add User" button is currently not functioning. Identify the issue and fix it so that new users can be added.
	- [✔] Ensure that both the name and email fields are not left empty and contain valid values before submission.
	- [✔] Implement validation for the email field to ensure that only valid email addresses are accepted.

![image](https://firebasestorage.googleapis.com/v0/b/fir-tutorial-1-2e338.appspot.com/o/IMG-20240630-WA0017.jpg?alt=media&token=03860198-59b4-4c46-9620-9407754936e8)




### Level 2
- [✔] Instead of using Antd Component I've completed the below task using the pure CSS code. Because, My laptop is facing issues and errors when I try to install Antd  using the command ``npm install antd``.  
- Integrate Antd components
	- [ ] Table: Use Ant Design's table component to display the data.
	- [ ] Buttons: Replace existing buttons with Ant Design's button components.
	- [ ] Inputs: Use Ant Design's input components for forms.
- Fix Existing Issues: 
	- [✔] Form Reset on Submission: Ensure that after submitting the form, the values in the name and email input fields are cleared.

![image](https://firebasestorage.googleapis.com/v0/b/fir-tutorial-1-2e338.appspot.com/o/IMG-20240630-WA0016.jpg?alt=media&token=6aecf84b-f6bb-44c2-9731-571482edb7b8)



### Level 3
- Add delete functionality:
	- [✔] Delete for Each User: Implement a delete feature for each user entry

![image](https://github.com/impressai/frontend_task/assets/28563570/c3da4f55-6e89-47cc-bbde-35e3c20f80f6)




### Level 4
- Add edit functionality:
	- [✔] Edit for Each User: Implement a edit feature for each user entry

![image](https://github.com/impressai/frontend_task/assets/28563570/67fd80fc-c022-41b3-8f01-de11de046379)



### Bonus level
- [ ] Maintain separate reducer - create and manage a separate reducer for storing the details of the currently edited user.
- [✔] Add Confirmation for Deletion - implement a confirmation dialog that asks for user approval before deleting a user entry.
