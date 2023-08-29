import React from "react";

import CustomButton from "./CustomButton";

function FilePicker({ file, setFile, readFile }) {
  return (
    <div className="filepicker-container">
      <div className="flex-1 flex flex-col">
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <label htmlFor="file-upload" className="filepicker-label">
          Inserir imagem
        </label>
        <p className="mt-2 pb-4 text-grey-500 text-xs truncate">
          {file === "" ? "Nenhuma imagem selecionada" : file.name}
        </p>
        {file === "" ? (
          ""
        ) : (
          <>
            <p>Selecione onde aplicar a imagem</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <CustomButton
                type="outline"
                title="Logo"
                handleClick={() => readFile("logo")}
                customStyles="text-xs"
              />
              <CustomButton
                type="filled"
                title="Total"
                handleClick={() => readFile("full")}
                customStyles="text-xs"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default FilePicker;
