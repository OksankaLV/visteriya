import React, { useState } from "react";

const AddBouquetForm: React.FC = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [price, setPrice] = useState("");
  const [categories, setCategories] = useState("");
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = {
      name,
      image,
      price,
      description,
      categories,
    };
    console.log(formData);
    setName("");
    setImage(null);
    setDescription("");
    setPrice("");
    setCategories("");
  };

  console.log("image:", image);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setImage(file);
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    } else {
      setPreviewUrl(null);
    }
  };

  return (
    <form className="addBouquetForm" onSubmit={handleSubmit}>
      <label>
        Назва букета
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          required
        />
      </label>
      <label>
        Опис
        <textarea
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          required
        />
      </label>
      <label>
        Ціна
        <input
          type="number"
          placeholder="Ціна (грн)"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          required
        />
      </label>
      <label>
        Категорія
        <select
          value={categories}
          onChange={(e) => {
            setCategories(e.target.value);
          }}
          required
        ></select>
      </label>
      <label>
        Фото:
        <input type="file" accept="image/*" onChange={handleFileChange} />
      </label>
      {previewUrl && (
        <div className="imagePreview">
          <p>Попередній перегляд</p>
          <img src={previewUrl} alt="preview" />
        </div>
      )}

      <button type="submit">Додати букет</button>
    </form>
  );
};

export default AddBouquetForm;
