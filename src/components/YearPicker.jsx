import React from "react";

function YearPicker({ onChange }) {
  const yearNow = new Date().getFullYear();
  return (
    <select
      id="year"
      name="year"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      required
      defaultValue={""}
      onChange={onChange}
    >
      <option value={yearNow}>Pilih Tahun</option>
      <option value="2024">2024</option>
      <option value="2025">2025</option>
      <option value="2026">2026</option>
      <option value="2027">2027</option>
      <option value="2028">2028</option>
      <option value="2029">2029</option>
      <option value="2030">2030</option>
    </select>
  );
}

export default YearPicker;
