using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AgenciaPRO.Model;

namespace AgenciaPRO.Repository
{
    public interface IUsuarioRepository
    {
        Task<IEnumerable<Usuario>> GetUsuarios();
        Task<Usuario> GetUsuarioById(int id);
        void AddUsuario(Usuario usuario);
        void AtualizarUsuario(Usuario usuario);
        void DeletarUsuario(Usuario usuario);

        Task<bool> SaveChangesAsync();
    }
}