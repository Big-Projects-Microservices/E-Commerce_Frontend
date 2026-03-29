import { useState } from "react";
import ContactInfoCard from "../molecules/ContactInfoCard";
import ContactForm from "../molecules/ContactForm";
import SearchBar from "../molecules/SearchBar";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [searchValue, setSearchValue] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleSearchChange(event) {
    setSearchValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1.2fr]">
        <ContactInfoCard />
        <ContactForm formData={formData} onChange={handleChange} onSubmit={handleSubmit} />
      </div>
      <SearchBar value={searchValue} onChange={handleSearchChange} />
    </section>
  );
}
