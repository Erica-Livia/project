import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import crypto from "crypto";

// Create User model

const UserSchema = new mongoose.Schema(
    {
      firstName: {
        type: String,
        required: [true, "First Name is Required"],
      },
      lastName: {
        type: String,
        required: [true, "First Name is Required"],
      },
      profilePhoto: {
        type: String,
        default:
          "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png",
      },
      email: {
        type: String,
        required: [true, "Email is Required"],
      },
      bio: {
        type: String,
      },
      password: {
        type: String,
        required: [true, "Password is Required"],
      },
      isAccountVerified: { type: Boolean, default: false },
    accountVerificationToken: { type: String },
    accountVerificationTokenExpiration: { type: Date },
    viewedBy: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      ],
    },
    passwordChangedAt: { type: Date },
    passwordRestetToken: { type: String },
    passwordResetTokenExpire: { type: Date },
  }
);

// ========= Create an Account verification token ==========
UserSchema.methods.createAccountVerificationToken = async function () {
    //create a token
    const verificationToken = crypto.randomBytes(32).toString("hex");
    this.accountVerificationToken = crypto
      .createHash("sha256")
      .update(verificationToken)
      .digest("hex");
    this.accountVerificationTokenExpires = Date.now() + 30 * 60 * 1000; //10 minutes
    return verificationToken;
};

//=============== Password reset/forget ===========

UserSchema.methods.createPasswordResetToken = async function () {
    const resetToken = crypto.randomBytes(32).toString("hex");
    this.passwordResetToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");
    this.passwordResetExpires = Date.now() + 30 * 60 * 1000; //10 minutes
    return resetToken;
};
// Compare password using bcryptjs
UserSchema.methods.isPasswordMatched = async function (userInputPassword) {
    return bcrypt.compare(userInputPassword, this.password);
};

// Compile schema into a model

const User = mongoose.model("User", UserSchema);
export default User;
