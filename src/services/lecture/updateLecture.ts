import db from '../../database/index.js';

export type createNewLectureBody = {
  nid: string,
  nama_lengkap: string,
  alamat: string,
  telepon: string,
  tanggal_lahir: Date,
}

export default async function createNewLecture(id: string, body: createNewLectureBody) {
  try {
    const now = new Date();
    const newLecture = await db.dosen.update({
      where: { id },
      data: {
        ...body,
        tanggal_lahir: new Date(body.tanggal_lahir),
        tanggal_diubah: now,
      },
      select: { id: true },
    });

    return {
      code: 200,
      payload: { id: newLecture.id },
    };
  } catch (error) {
    console.log(error);
    return { error };
  }
}