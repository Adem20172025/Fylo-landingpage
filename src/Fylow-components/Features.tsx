import devices from "../assets/icon-access-anywhere.svg";
import security from "../assets/icon-security.svg";
import realTime from "../assets/icon-collaboration.svg";
import files from "../assets/icon-any-file.svg";
export function Features() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 md:max-w-[50%] gap-14 px-7 w-full">
      <div className="flex flex-col gap-2 text-white text-center items-center">
        <img className="w-10" src={devices} alt="devices" />
        <h2 className="text-lg font-semibold mt-4">Access your files, anywhere</h2>
        <p className="text-[14px]">
          The ability to use a smartphone, tablet, or computer to access your
          account means your files follow you everywhere.
        </p>
      </div>
      <div className="flex flex-col gap-2 text-white text-center items-center">
        <img className="w-10" src={security} alt="security icon" />
        <h2 className="text-lg font-semibold mt-4">Security you can trust</h2>
        <p className="text-[14px]">
          2-factor authentication and user-controlled encryption are just a
          couple of the security features we allow to help secure your files.
        </p>
      </div>
      <div className="flex flex-col gap-2 text-white text-center items-center">
        <img className="w-13" src={realTime} alt="real time collaboration" />
        <h2 className="text-lg font-semibold mt-4">Real-time collaboration</h2>
        <p className="text-[14px]">
          Securely share files and folders with friends, family and collagues
          for live collaboration. No email attachments required.
        </p>
      </div>
      <div className="flex flex-col gap-2 text-white text-center items-center">
        <img className="w-13" src={files} alt="any type of file" />
        <h2 className="text-lg font-semibold mt-4">Store any type of file</h2>
        <p className="text-[14px]">
          whether you're sharing holidays photos, or work documents, Fylo has
          you covered allowing for all file types to be securely stored and
          shared.
        </p>
      </div>
    </section>
  );
}
