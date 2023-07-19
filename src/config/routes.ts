import { Router } from "express";

const router = Router();

router.get("/", (_, res) => {
  res.send("Rise above the ordinary and unleash your extraordinary potential.");
});

export default router;
