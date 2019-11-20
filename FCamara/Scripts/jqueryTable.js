function LimparModal() {
    var modal = $('#modalProduto');
    modal.find('#id').val("");
    modal.find('#codigo').val("");
    modal.find('#descricao').val("");
}

async function SalvarProduto() {
    var modal = $('#modalProduto');
    var id = modal.find('#id').val();
    if (id == "") { id = 0; }
    var produto = {
        "Id": id,
        "Codigo": modal.find('#codigo').val(),
        "Descricao": modal.find('#descricao').val()
    }

    await $.ajax({
        url: "../../ServiceApi/Api.svc/InserirProduto",
        type: "POST",
        data: JSON.stringify(produto),
        dataType: "json",
        contentType: "application/json",
        success: function () {
        }
    });
    Listar();
}

async function DeletarProduto() {
    var modal = $('#modalExluir');
    var id = modal.find('#idProduto').val();
    await $.ajax({
        url: "../../ServiceApi/Api.svc/DeletarProduto",
        type: "POST",
        data: JSON.stringify(id),
        dataType: "json",
        contentType: "application/json",
        success: function () {
        }

    });
    Listar();
}

function EditarProduto(id) {
    $.ajax({
        url: "../../ServiceApi/Api.svc/BuscarProduto",
        type: "POST",
        data: JSON.stringify(id),
        dataType: "json",
        contentType: "application/json",
        success: function (result) {
            var modal = $('#modalProduto');
            modal.find('#id').val(result.Id);
            modal.find('#codigo').val(result.Codigo);
            modal.find('#descricao').val(result.Descricao);
        }
    });
}

function Listar() {
    $.ajax({
        url: "../../ServiceApi/Api.svc/ListaProduto",
        type: "GET",
        dataType: "json",
        contentType: "application/json",
        success: function (result) {
            $("#tabela tbody > tr").remove();
            $.each(result, function (i, data) {
                $("#tabela tbody").append(
                    "<tr>" +
                    "   <td>" + data.Id + "</td>" +
                    "   <td>" + data.Codigo + "</td>" +
                    "   <td>" + data.Descricao + "</td>" +
                    "   <td>" +
                    "       <a data-toggle='modal' data-target='#modalProduto' onclick='EditarProduto(" + data.Id + ")'>Editar</a>  |" +
                    "       <a data-toggle='modal' data-target='#modalExluir' onclick='Deletar(" + data.Id + ")' >Deletar</a> " +
                    "   </td>" +
                    "</tr>"
                );
            });
            $('#tabela').DataTable();
        }
    });
}

function Deletar(id) {
    var modal = $('#modalExluir');
    modal.find('#idProduto').val(id);
    modal.find('#Produto').html(id);
}