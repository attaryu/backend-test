import db from '../../database/index.js';
import generateId from '../../lib/nanoid.js';

export type createNewLectureBody = {
  nid: string,
  nama_lengkap: string,
  alamat: string,
  telepon: string,
  tanggal_lahir: Date,
}

export default async function createNewLecture(body: createNewLectureBody) {
  try {
    const now = new Date();
    const newLecture = await db.dosen.create({
      data: {
        id: generateId(),
        ...body,
        tanggal_lahir: new Date(body.tanggal_lahir),
        tanggal_dibuat: now,
        tanggal_diubah: now,
      },
      select: { id: true },
    });

    return {
      code: 201,
      payload: { id: newLecture.id },
    };
  } catch (error) {
    console.log(error);
    return { error };
  }
}