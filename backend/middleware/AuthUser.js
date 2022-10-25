import User from "../models/UserModel.js";

export const verifyUser = async (req, res, next) => {
    if(!req.session.userId){
        return res.status(401).json({msg: "Mohon login dulu"})
    }
    const user = await User.findOne({
        where: {
            uuid: req.session.userId
        }
    });
    if(!user) return res.status(400).json({msg: "user tidak di temukan"});
    req.userId = user.id;
    req.role = user.role;
    next();
}

export const adminOnly = async (req, res, next) => {
    const user = await User.findOne({
        where: {
            uuid: req.session.userId
        }
    });
    if(!user) return res.status(400).json({msg: "user tidak di temukan"});
    if(user.role !== "admin") return res.status(403).json({msg: "area 77, you not supos tu bi hir"});
    next();
}