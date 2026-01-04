import { FaMailBulk, FaSave, FaUser } from "react-icons/fa";
import { FaPhotoFilm } from "react-icons/fa6";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import useAuth from "../hooks/useAuth";

const MyProfile = () => {
  const { user, updateUserProfile, setUser, loading } = useAuth();

 
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const name = e.target.dName.value;
    const photo = e.target.pUrl.value;

    updateUserProfile(name, photo)
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photo });
        console.log(user);
        Swal.fire({
          title: "Information Updated!",
          text: "You account information updated successfully!!",
          icon: "success",
        });
      })
      .catch((error) => {
        // console.log(error.message);
        toast.error(`${error.message}`);
      });
  };

//    if (loading) {
//     return (
//       <div className="flex justify-center items-center h-[500px]">
//         <div class="loader"></div>
//       </div>
//     );
//   }
  document.title = "Profile Page";

  return (
    <div>
      <div className=" c-container">
        <div className="max-w-3xl mx-auto mt-20 mb-20">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-900 mb-2 pt-25">
              My Profile
            </h1>
            <p className="text-slate-600">Manage your account information</p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="h-32 bg-gradient-to-b from-[#15b923] via-[#0a8d15] to-[#22a318]"></div>

            <div className="md:px-8 px-4 pb-8">
              {/* Avatar Section */}
              <div className="flex flex-col items-center -mt-16 mb-8">
                <div className="relative group">
                  {user?.photoURL ? (
                    <img
                      src={user?.photoURL}
                      alt={user?.displayName}
                      className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                  ) : (
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center border-4 border-white shadow-lg">
                      <span className="text-white font-bold text-4xl">
                        {user?.displayName}
                      </span>
                    </div>
                  )}

                  <button className="absolute bottom-0 right-0 w-10 h-10 bg-white rounded-full shadow-lg border-2 border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors group">
                    <FaPhotoFilm className="w-5 h-5 text-slate-600" />
                  </button>
                </div>
              </div>

              <form onSubmit={handleUpdateProfile} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Display Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <FaUser className="w-5 h-5 text-slate-400" />
                    </div>
                    <input
                      type="text"
                      name="dName"
                      defaultValue={user?.displayName}
                      className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <FaMailBulk className="w-5 h-5 text-slate-400" />
                    </div>
                    <input
                      type="email"
                      value={user?.email}
                      name="email"
                      disabled
                      className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-xl bg-slate-50 text-slate-500 cursor-not-allowed"
                      required
                    />
                  </div>
                  <p className="mt-2 text-xs text-slate-500">
                    Email cannot be changed
                  </p>
                </div>

                {/* Photo URL */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Photo URL
                  </label>
                  <input
                    name="pUrl"
                    type="url"
                    defaultValue={user?.photoURL || ""}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="https://example.com/photo.jpg"
                    required
                  />
                  <p className="mt-2 text-xs text-slate-500">
                    Enter a URL to your profile picture
                  </p>
                </div>

                {/* Update Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full  bg-gradient-to-b from-[#15b923] via-[#0a8d15] to-[#22a318] text-white font-semibold py-3 px-6 rounded-xl hover:from-green-500 hover:to-green-700 transition-all duration-200 shadow-lg cursor-pointer hover:shadow-xl flex items-center justify-center space-x-2"
                  >
                    <FaSave className="w-5 h-5" />
                    <span>Update Profile</span>
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Account Info Card */}
          <div className="mt-6 bg-accent-50 border border-blue-200 rounded-xl p-6">
            <h3 className="font-semibold text-slate-900 mb-2 flex items-center space-x-2">
              <FaUser className="w-5 h-5" />
              <span>Account Information</span>
            </h3>
            <ul className="space-y-2 text-sm text-slate-900">
              <li>• Update your display name to personalize your profile</li>
              <li>• Add a photo URL to show your profile picture</li>
              <li>• Your email address is permanent and cannot be modified</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
