# Реалізація інформаційного та програмного забезпечення

## SQL скрипти для ініціалізації та наповнення бази даних

```
CREATE TABLE Permission (
    id INT SERIAL PRIMARY KEY,
    name_of_permission VARCHAR(45) NOT NULL,
    description_of_permission TEXT NOT NULL,
    role_permission INT NOT NULL,
    FOREIGN KEY (role_permission) REFERENCES Role(id) ON DELETE CASCADE
);

CREATE TABLE Role (
    id INT SERIAL PRIMARY KEY,
    role_name VARCHAR(45) NOT NULL, 
    user_role INT,
    role_description TEXT NOT NULL,
    FOREIGN KEY (user_role) REFERENCES User(id) ON DELETE SET NULL
);

CREATE TABLE User (
    id INT SERIAL PRIMARY KEY,
    user_name VARCHAR(45) NOT NULL, 
    user_lastname VARCHAR(45) NOT NULL,
    user_password VARCHAR(255) NOT NULL
);

CREATE TABLE Survey (
    id INT SERIAL PRIMARY KEY,
    survey_name VARCHAR(45) NOT NULL,
    survey_description TEXT NOT NULL,
    survey_result INT NULL,
    survey_user INT NOT NULL,
    FOREIGN KEY (survey_result) REFERENCES Result(id) ON DELETE SET NULL,
    FOREIGN KEY (survey_user) REFERENCES User(id) ON DELETE CASCADE
);

CREATE TABLE Result (
    id INT SERIAL PRIMARY KEY,
    result_name VARCHAR(45) NOT NULL,
    result_description TEXT NOT NULL
);

INSERT INTO User (user_name, user_lastname, user_password) 
VALUES 
('John', 'Doe', 'hashed_password_1'),
('Jane', 'Smith', 'hashed_password_2'),
('Alice', 'Johnson', 'hashed_password_3');

INSERT INTO Role (role_name, user_role, role_description) 
VALUES 
('Admin', 1, 'Administrator role with full permissions'),
('Editor', 2, 'Editor role with content management permissions'),
('Viewer', NULL, 'Viewer role with read-only access');

INSERT INTO Permission (name_of_permission, description_of_permission, role_permission) 
VALUES 
('View Content', 'Allows viewing of all content', 3),
('Edit Content', 'Allows editing existing content', 2),
('Manage Users', 'Allows managing user accounts', 1),
('Delete Content', 'Allows deletion of content', 1);

INSERT INTO Result (result_name, result_description) 
VALUES 
('Completed', 'The survey was successfully completed'),
('In Progress', 'The survey is still being filled out'),
('Failed', 'The survey submission failed');


INSERT INTO Survey (survey_name, survey_description, survey_result, survey_user) 
VALUES 
('Customer Satisfaction Survey', 'Survey about customer satisfaction', 1, 1),
('Employee Feedback Survey', 'Collecting feedback from employees', 2, 2),
('Website Usability Survey', 'Survey to evaluate website usability', NULL, 3)
```
