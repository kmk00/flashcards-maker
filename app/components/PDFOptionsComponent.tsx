import { usePDFOptions } from "@/store/options";
import { useState } from "react";
import { HexColorPicker } from "react-colorful";
import DisplayOptions from "./DisplayCardOptions";
import Button from "./Button";
import { AnimatePresence, motion } from "framer-motion";

const PDFOptionsComponent = () => {
  const { hideOptions, currentOptions, setNewOptions } = usePDFOptions();

  const [settings, setSettings] = useState<PDFOptions>(currentOptions);

  const handleSettingsChange = (event: React.MouseEvent<HTMLButtonElement>) => {
    setSettings({
      ...settings,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const saveAndExit = () => {
    if (!validateSettings()) {
      return;
    }
    setNewOptions(settings);
    hideOptions();
  };

  const validateSettings = () => {
    if (settings.questionFontSize > 40 || settings.answerFontSize > 40) {
      alert("Font size must be less than 40");
      return false;
    }

    if (settings.questionFontSize < 10 || settings.answerFontSize < 10) {
      alert("Font size must be greater than 10");
      return false;
    }

    return true;
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex flex-col pb-10 lg:p-0 justify-center"
      >
        <h2 className="text-center lg:text-left text-xl">
          Select options for your PDF file
        </h2>
        <div className="flex flex-wrap justify-center items-stretch gap-4 mt-4">
          <div className="flex border-2 items-center border-slate-400 p-2 gap-4 ">
            <div className="flex gap-4 flex-col">
              <p>Width</p>
              <Button
                label="195px"
                value={195}
                name="width"
                onClick={handleSettingsChange}
              />
              <Button
                label="280px"
                value={280}
                name="width"
                onClick={handleSettingsChange}
              />
            </div>
            <div className="flex gap-4 flex-col">
              <p>Height</p>
              <Button
                label="195px"
                value={195}
                name="height"
                onClick={handleSettingsChange}
              />
              <Button
                label="270px"
                value={270}
                name="height"
                onClick={handleSettingsChange}
              />
            </div>
            <div className="flex gap-4 px-2 flex-col">
              <p>Select Mode</p>
              <select
                value={settings.mode}
                onChange={(e) =>
                  setSettings({ ...settings, mode: e.target.value })
                }
                className="text-slate-200 bg-slate-600 p-2"
              >
                <option value="single">Single Card</option>
                <option value="fold">Folded Card</option>
              </select>
              <div className="flex gap-4 justify-between items-center">
                <p>Question Size</p>
                <input
                  className="text-slate-200 bg-slate-600 w-10"
                  type="number"
                  min={12}
                  max={40}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      questionFontSize: parseInt(e.target.value),
                    })
                  }
                  value={settings.questionFontSize}
                />
              </div>
              <div className="flex gap-4 justify-between items-center">
                <p>Answer Size</p>
                <input
                  className="text-slate-200 bg-slate-600 w-10"
                  type="number"
                  min={12}
                  max={40}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      answerFontSize: parseInt(e.target.value),
                    })
                  }
                  value={settings.answerFontSize}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center border-2 border-slate-400 p-4 gap-4">
            <div className="flex gap-4 flex-col">
              <p>Question Color</p>
              <HexColorPicker
                style={{ width: "150px", height: "150px" }}
                color={settings.questionColor}
                onChange={(setColor) =>
                  setSettings({ ...settings, questionColor: setColor })
                }
              />
            </div>
            <div className="flex gap-4 flex-col">
              <p>Answer Color</p>
              <HexColorPicker
                style={{ width: "150px", height: "150px" }}
                color={settings.answerColor}
                onChange={(setColor) =>
                  setSettings({ ...settings, answerColor: setColor })
                }
              />
            </div>
          </div>
        </div>
        <div className="sm:flex justify-center block gap-4">
          <DisplayOptions label="New" options={settings} />
          <DisplayOptions label="Current" options={currentOptions} />
        </div>
        <div className="mt-4 flex justify-center lg:justify-start gap-4">
          <Button label="Save and exit" onClick={saveAndExit} />
          <Button label="Cancel" onClick={hideOptions} />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PDFOptionsComponent;
