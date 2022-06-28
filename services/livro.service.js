import LivroRepository from "../repositories/livro.repository.js";

async function createLivro(livro) {
  return await LivroRepository.insertLivro(livro);
}

async function getLivros() {
  return await LivroRepository.getLivros();
}

async function getLivroById(id) {
  return await LivroRepository.getLivroById(id);
}

async function updateLivro(livro) {
  await LivroRepository.updateLivro(livro);
  return LivroRepository.getLivroById(livro.livroId);
}

async function deleteLivro(id) {
  return await LivroRepository.deleteLivro(id);
}

export default {
  createLivro,
  getLivros,
  getLivroById,
  updateLivro,
  deleteLivro,
};