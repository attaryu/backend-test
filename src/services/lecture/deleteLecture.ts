import db from '../../database/index.js';

export default async function deleteLecture(id: string) {
  try {
    const lectures = await db.dosen.delete({
      where: { id },
      select: { id: true },
    });

    return {
      code: 204,
      payload: { lectures },
    };
  } catch (error) {
    console.log(error);
    return { error };
  }
}