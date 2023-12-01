using Microsoft.AspNetCore.Mvc.ViewFeatures;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace CarStore.Helper
{
    public static class JavaScriptHelper
    {
        public static string ToJson(this HtmlHelper helper, object obj)
        {
            var jsonSerializerSettings = new JsonSerializerSettings
            {
                StringEscapeHandling = StringEscapeHandling.EscapeHtml,
                ContractResolver = new CamelCasePropertyNamesContractResolver()
            };
            var content = JsonConvert.SerializeObject(obj, jsonSerializerSettings);
            return content;
        }
    }
}
