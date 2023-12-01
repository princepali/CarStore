using System.Reflection;

public class KeyValuePairConverter
{
    public List<Dictionary<string, object>> ConvertToKeyValuePairs(IEnumerable<dynamic> data)
    {
        var keyValueList = new List<Dictionary<string, object>>();

        foreach (var dynamicData in data)
        {
            var keyValueDict = new Dictionary<string, object>();
            foreach (PropertyInfo property in dynamicData.GetType().GetProperties())
            {
                var propertyName = property.Name;
                var propertyValue = property.GetValue(dynamicData, null);

                keyValueDict.Add(propertyName, propertyValue);
            }
            keyValueList.Add(keyValueDict);
        }

        return keyValueList;
    }
}
