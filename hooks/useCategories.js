import React from 'react'
import { useState } from 'react';
import { useCallback } from 'react';
import { increSearch } from '../lib/search';

const useCategories = () => {
  const [options, setOptions] = useState([])      //検索候補を入れる配列
  const [category, setCategory] = useState([])   //検索欄に入力された値
  const [chipData, setChipData] = useState([])   //追加されたカテゴリが配列で入る
  const [select, setSelect] = useState("categories")
  const [label, setLabel] = useState("name")
  
  const incrementalSearch = useCallback(async(event, select) => {
    const res =  await increSearch({keyword: event.target.value, category: select})
    setOptions([...res.data]);
  },[setOptions])

  const inputValue = useCallback((value) => {
    setCategory(value)
  },[setCategory])


  const addCategories = useCallback((category) => {
    if(category.length > 0){
      console.log(category,"category")
      const S="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
      const random = Array.from(crypto.getRandomValues(new Uint8Array(16))).map((n)=>S[n%S.length]).join('')
      setChipData(prev => [...prev, {name: category, key: random}])
    }
  },[setChipData])

  const receiveExistingCategories = useCallback((categories) => {
    if(categories.length > 0){
      categories.map(category => {
        const S="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
        const random = Array.from(crypto.getRandomValues(new Uint8Array(16))).map((n)=>S[n%S.length]).join('')
        setChipData(prev => [...prev, {name: category, key: random}])
      })
    }
  },[setChipData])

  const handleDelete = useCallback((chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.name !== chipToDelete.name));
  },[setChipData]);

  const handleChange = useCallback((event) => {
    setSelect(event.target.value);
    if(event.target.value === "categories"){
      setLabel("name")
    }else if(event.target.value === "portfolios"){
      setLabel("title")
    }else if(event.target.value === "users"){
      setLabel("nickname")
    }
  },[setSelect]);

  return {chipData, handleDelete,incrementalSearch, options, 
          inputValue, addCategories, category, handleChange, select,label, 
          receiveExistingCategories
        }
}

export default useCategories
