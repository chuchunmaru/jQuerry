function consultass()
{   $(".anim-pro").show();
    var cep = document.getElementById ("cepIn").value;
    var url = "https:viacep.com.br/ws/"+cep+"/json/";


$.ajax
({
    url: url,
    type: "GET",
    success: function(response)
    {
        $("#titler").html("CEP: " +response.cep);
        $("#cep").html(response.cep);
        if(response.cep == ""){
            $("#cep").html("-");
        }
        $("#logradouro").html(response.logradouro);
        if(response.logradouro == ""){
            $("#logradouro").html("-");
        }
        $("#complemento").html(response.complemento);
        if(response.complemento == ""){
            $("#complemento").html("-");
        }
        $("#bairro").html(response.bairro);
        if(response.bairro == ""){
            $("#bairro").html("-");
        }     
        $("#localidade").html(response.localidade);
        if(response.localidade == ""){
            $("#localidade").html("-");
        }
        $("#uf").html(response.uf);
        if(response.uf == ""){
            $("#uf").html("-");
        }
        $("#ddd").html(response.ddd);
        if(response.ddd == ""){
            $("#ddd").html("-");
        }
        $(".response-cep").show();
        $(".anim-pro").hide();
    }
})
}

$(function()
{
 $(".response-cep").hide();
 $(".anim-pro").hide();   
})
