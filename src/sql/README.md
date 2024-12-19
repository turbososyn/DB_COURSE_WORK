# SQL-скрипти

```-- Таблиця Permission
CREATE TABLE Permission (
    id SERIAL PRIMARY KEY,
    name_of_permission VARCHAR(45) NOT NULL,
    description_of_permission TEXT NOT NULL,
    role_permission INT NOT NULL,
    CONSTRAINT fk_role_permission FOREIGN KEY (role_permission) REFERENCES Role(id) ON DELETE CASCADE
);

-- Таблиця Role
CREATE TABLE Role (
    id SERIAL PRIMARY KEY,
    role_name VARCHAR(45) NOT NULL, 
    user_role INT,
    role_description TEXT NOT NULL,
    CONSTRAINT fk_user_role FOREIGN KEY (user_role) REFERENCES "User"(id) ON DELETE SET NULL
);

-- Таблиця User
CREATE TABLE "User" (
    id SERIAL PRIMARY KEY,
    user_name VARCHAR(45) NOT NULL, 
    user_lastname VARCHAR(45) NOT NULL,
    user_password VARCHAR(255) NOT NULL
);

-- Таблиця Survey
CREATE TABLE Survey (
    id SERIAL PRIMARY KEY,
    survey_name VARCHAR(45) NOT NULL,
    survey_description TEXT NOT NULL,
    survey_result INT,
    survey_user INT NOT NULL,
    CONSTRAINT fk_survey_result FOREIGN KEY (survey_result) REFERENCES Result(id) ON DELETE SET NULL,
    CONSTRAINT fk_survey_user FOREIGN KEY (survey_user) REFERENCES "User"(id) ON DELETE CASCADE
);

-- Таблиця Result
CREATE TABLE Result (
    id SERIAL PRIMARY KEY,
    result_name VARCHAR(45) NOT NULL,
    result_description TEXT NOT NULL
);

-- Вставка даних у таблицю User
INSERT INTO "User" (user_name, user_lastname, user_password) 
VALUES 
('John', 'Doe', 'hashed_password_1'),
('Jane', 'Smith', 'hashed_password_2'),
('Alice', 'Johnson', 'hashed_password_3');

-- Вставка даних у таблицю Role
INSERT INTO Role (role_name, user_role, role_description) 
VALUES 
('Admin', 1, 'Administrator role with full permissions'),
('Editor', 2, 'Editor role with content management permissions'),
('Viewer', NULL, 'Viewer role with read-only access');

-- Вставка даних у таблицю Permission
INSERT INTO Permission (name_of_permission, description_of_permission, role_permission) 
VALUES 
('View Content', 'Allows viewing of all content', 3),
('Edit Content', 'Allows editing existing content', 2),
('Manage Users', 'Allows managing user accounts', 1),
('Delete Content', 'Allows deletion of content', 1);

-- Вставка даних у таблицю Result
INSERT INTO Result (result_name, result_description) 
VALUES 
('Completed', 'The survey was successfully completed'),
('In Progress', 'The survey is still being filled out'),
('Failed', 'The survey submission failed');

-- Вставка даних у таблицю Survey
INSERT INTO Survey (survey_name, survey_description, survey_result, survey_user) 
VALUES 
('Customer Satisfaction Survey', 'Survey about customer satisfaction', 1, 1),
('Employee Feedback Survey', 'Collecting feedback from employees', 2, 2),
('Website Usability Survey', 'Survey to evaluate website usability', NULL, 3);
```