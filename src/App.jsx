import { Routes, Route } from 'react-router-dom';
import { RegisterPage } from 'pages/RegisterPage';
import { LoginPage } from 'pages/LoginPage';
import { ContactsPage } from 'pages/ContactsPage';
import { HomePage } from 'pages/HomePage';
import { AddContactPage } from 'pages/AddContactPage';
import { Layout } from 'pages/Layout';
import { PrivateRoute } from 'components/PrivateRoute/PrivateRoute';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          {/* <Route path="contacts" element={} /> */}
          <Route
            path="addcontact"
            element={
              <PrivateRoute>
                <AddContactPage />
              </PrivateRoute>
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>

      {/* <div>
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        <Filter />

        <ContactList />
      </div> */}
    </>
  );
}
