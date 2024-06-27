import * as dao from "./dao.js";

export default function ModuleRoutes(app) {
    const updateModule = async (req, res) => {
        const status = await dao.updateModule(req.params.mid, req.body);
        res.json(status);
    };

    const deleteModule = async (req, res) => {
        const { mid } = req.params;
        try {
            await dao.deleteModule(mid);
            res.sendStatus(200);
        } catch (error) {
            res.status(500).send(error);
        }
    };

    const createModule = async (req, res) => {
        const { cid } = req.params;
        const newModule = {
            ...req.body,
            course: cid,
        };
        try {
            const createdModule = await dao.createModule(newModule);
            res.json(createdModule);
        } catch (error) {
            res.status(500).send(error);
        }
    };

    const findModulesForCourse = async (req, res) => {
        const { cid } = req.params;
        try {
            const modules = await dao.findModulesForCourse(cid);
            res.json(modules);
        } catch (error) {
            res.status(500).send(error);
        }
    };

    app.put("/api/modules/:mid", updateModule);
    app.delete("/api/modules/:mid", deleteModule);
    app.post("/api/courses/:cid/modules", createModule);
    app.get("/api/courses/:cid/modules", findModulesForCourse);
}