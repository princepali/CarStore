﻿namespace CarStore.Helper
{
    public static class EnumHelper
    {
        public static List<KeyValuePair<string, string>> GetEnumList<T>()
        {

            var list = new List<KeyValuePair<string, string>>();
            foreach (var e in Enum.GetValues(typeof(T)))
            {
                list.Add(new KeyValuePair<string, string>(e.ToString(), ((int)e).ToString()));
            }
            return list;

        }
    }
}
